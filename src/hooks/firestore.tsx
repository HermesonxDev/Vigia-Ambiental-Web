import { createContext, useState, useContext } from "react";
import firebaseConfig from "../config/firebase";
import { FirebaseError, initializeApp } from "firebase/app";

import {
    getFirestore as getFirestoreDB,
    collection,
    getDocs,
    query,
    where,
    addDoc,
    initializeFirestore,
    persistentLocalCache,
    persistentMultipleTabManager,
    doc,
    setDoc,
} from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

import type { UserForm, IUserProps, ReportForm, IReportProps } from "../utils/interfaces";

import { useLog } from "./log";

let firestoreInstance: ReturnType<typeof getFirestoreDB> | null = null;

interface IFirestoreContext {
    logged: boolean,
    user: IUserProps | null,
    loading: boolean,
    signUp(event: React.FormEvent<HTMLFormElement>, formState: UserForm): void,
    signIn(event: React.FormEvent<HTMLFormElement>, formState: UserForm): void,
    signOut(): void,
    getReportsByUserId(userId: string | null | undefined): Promise<IReportProps[]>,
    addReport(
        event: React.FormEvent<HTMLFormElement>,
        formState: ReportForm,
        navigate: (path: string) => void
    ): void,
    editUser(
        event: React.FormEvent<HTMLFormElement>,
        id: string | null | undefined,
        name: string | null | undefined
    ): void
}


/* CRIA O CONTEXTO PARA SER USADO NA APLICAÇÃO */
const FirestoreContext = createContext<IFirestoreContext>({} as IFirestoreContext);


/*
* --> PROVÊ O CONTEXTO PARA A APLICAÇÃO
*      Guarda as funções e variáveis que podem ser chamadas e utilizadas em qualquer
*      canto da aplicação.
*/
const FirestoreProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const {
        activeNotification,
        setNotificationContent
    } = useLog()

    const app = initializeApp(firebaseConfig);
    
    const db = firestoreInstance || initializeFirestore(app, {
        localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
    });

    firestoreInstance = db;

    const auth = getAuth(app);

    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('logged')
        return !!isLogged
    })

    const [user, setUser] = useState<IUserProps | null>(() => {
        const onUser = localStorage.getItem('user');
        return onUser ? JSON.parse(onUser) : null
    })

    const [loading, setLoading] = useState<boolean>(false)
    
    const signUp = async (event: React.FormEvent<HTMLFormElement>, formState: UserForm) => {
        event.preventDefault();
        
        try {
            setLoading(true)
            const { name, email, password } = formState
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const timestamp = new Date().toISOString()

            await addDoc(collection(db, "users"), {
                uid: userCredential.user.uid,
                name,
                email,
                created_at: timestamp,
                updated_at: timestamp,
                deleted_at: '',
                last_access: timestamp
            })

            const response = await searchUserByEmail(email)

            if (!response) {
                activeNotification("error")
                setNotificationContent({
                    title: "Erro ao criar o usuário",
                    message: "signUp(), Não foi possivel gravar os dados no banco."
                })
            }

            const newUser = {
                uid: response?.[0].uid || '',
                name: response?.[0].name || '',
                email: response?.[0].email || '',
                created_at: response?.[0].created_at || '',
                updated_at: response?.[0].created_at || '',
                deleted_at: response?.[0].deleted_at || '',
                last_access: response?.[0].last_access || ''
            }

            setUser(newUser)
            localStorage.setItem('user', JSON.stringify(response?.[0]))

            if (user !== null) {
                setLogged(true)
                localStorage.setItem('logged', 'true')

                activeNotification('success')
                setNotificationContent({
                    title: 'Usuário registrado com sucesso!',
                    message: 'Bem-vindo ao Vigia Ambiental'
                })
            }

            setLoading(false)

        } catch (error) {
            setLoading(false)
            activeNotification("error")
            setNotificationContent({
                title: "Erro ao criar o usuário",
                message: "signUp(), " + String(error)
            })
        }
    }



    const signIn = async (event: React.FormEvent<HTMLFormElement>, formState: UserForm) => {
        event.preventDefault();
    
        try {
            setLoading(true)
            const { email, password } = formState
            await signInWithEmailAndPassword(auth, email, password);
    
            const response = await searchUserByEmail(email);
    
            if (!response) {
                activeNotification('error')
                setNotificationContent({
                    title: 'Erro ao tentar logar.',
                    message: 'Usuário ou senha invalidos!'
                })
            }

            const user = {
                uid: response?.[0].uid || '',
                name: response?.[0].name || '',
                email: response?.[0].email || '',
                created_at: response?.[0].created_at || '',
                updated_at: response?.[0].created_at || '',
                deleted_at: response?.[0].deleted_at || '',
                last_access: response?.[0].last_access || ''
            }

            setUser(user)
            localStorage.setItem('user', JSON.stringify(response?.[0]))

            if (user !== null) {
                setLogged(true)
                localStorage.setItem('logged', 'true')

                activeNotification('success')
                setNotificationContent({
                    title: 'Usuário logado com sucesso!',
                    message: 'Bem-vindo ao Vigia Ambiental'
                })
            }

            setLoading(false)

        } catch (error) {
            setLoading(false)
            activeNotification('error')
            setNotificationContent({
                title: 'Erro ao tentar logar.',
                message: `signIn(), ${String(error as FirebaseError)}`
            })
        }
    };



    const signOut = () => {
        setLogged(false)
        localStorage.removeItem('logged')
        localStorage.removeItem('user')
    }



    const searchUserByEmail = async (email: string): Promise<IUserProps[] | null> => {
        try {
            const usersCollection = collection(db, "users");
            const q = query(usersCollection, where("email", "==", email));
            const querySnapshot = await getDocs(q);
    
            if (querySnapshot.empty) {
                console.log(`Nenhum usuário encontrado com o email: ${email}.`);
                return null;
            }
    
            return querySnapshot.docs.map(doc => doc.data() as IUserProps);
        } catch (error) {
            activeNotification("error")
            setNotificationContent({
                title: "Erro ao buscar usuário por Email",
                message: "searchUserByEmail() " + String(error)
            })
            return null
        }
    };    


    const getReportsByUserId = async (userId: string) => {
        try {
            setLoading(true)
            const q = query(
            collection(db, 'reports'), where("reportingUserId", "==", userId));

            const querySnapshot = await getDocs(q);
            const docs: any[] = [];

            querySnapshot.forEach((doc) => {
                docs.push({ id: doc.id, ...doc.data() });
            });

            setLoading(false)
            
            return docs;

        } catch (error) {
            setLoading(false)
            activeNotification("error");
            setNotificationContent({
                title: "Erro ao buscar denúncias",
                message: "getReportsByUserId() " + String(error)
            });
            return [];
        }
    };


    const addReport = async (
        event: React.FormEvent<HTMLFormElement>,
        formState: ReportForm,
        navigate: (path: string) => void
    ) => {
        event.preventDefault()

        try {
            setLoading(true)

            const {
                reportingUserId,
                street,
                number,
                neighborhood,
                referencePoint,
                description
            } = formState

            const timestamp = new Date().toISOString()

            await addDoc(collection(db, "reports"), {
                reportingUserId,
                street,
                number,
                neighborhood,
                referencePoint,
                status: 'Em Análise',
                description,
                created_at: timestamp,
                updated_at: timestamp,
                deleted_at: '',
            })

            setLoading(false)

            activeNotification('success')
            setNotificationContent({
                title: 'Denuncia registrada com sucesso!',
                message: 'Verifique suas denuncias em "Acompanhar Denuncias"!'
            })

            navigate('/')
        } catch (error) {
            setLoading(false)
            activeNotification("error")
            setNotificationContent({
                title: "Erro ao criar denuncia",
                message: `addReport(), ${String(error)}`
            })
        }
    }


    const editUser = async (event: React.FormEvent<HTMLFormElement>, id: string, name: string) => {
        event.preventDefault();
    
        try {
            setLoading(true)
            if (id) {
                const userRef = doc(db, "users", id);
                const response = await setDoc(
                    userRef,
                    { name },
                    { merge: true }
                )

                console.log(response)
                activeNotification('success')
                setNotificationContent({
                    title: 'Usuário editado com sucesso!',
                    message: ''
                })
            }

            setLoading(false)

        } catch (error) {
            setLoading(false)
            activeNotification("error")
            setNotificationContent({
                title: "Erro ao editar usuário",
                message: `editUser(), ${String(error)}`
            })
        }
    }


    return (
        <FirestoreContext.Provider value={{
            logged,
            user,
            loading,
            signUp,
            signIn,
            signOut,
            getReportsByUserId,
            addReport,
            editUser
        }}>
            {children}
        </FirestoreContext.Provider>
    );
};

function useFirestore(): IFirestoreContext {
    const context = useContext(FirestoreContext);
    if (!context) {
        throw new Error("useFirestore must be used within a FirestoreProvider");
    }
    return context;
}

export { FirestoreProvider, useFirestore };