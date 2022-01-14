import { useEffect } from "react";
import { NextPage } from "next";
import Conversation from "../../components/Conversation/conversation";
import { wrapper } from "../../store/store";
import Layout from "../../components/Layout/layout";
import { ConversationInterface } from "../../types/conversation";
// import { useDispatch } from "react-redux";
// import { storeUser } from "../../store/users/userAction";

const ConversationPage: NextPage<{conversation: ConversationInterface[], id: number}> = ({ conversation, id }): JSX.Element => {
    /*const dispatch = useDispatch();
    useEffect(() => {
        dispatch(storeUser(id));
    })*/
    
    const conversationsList = conversation.map((conversation) => {
        return (
            <li className="listEl" key={conversation.id}>
                <Conversation {...conversation} />
            </li>
        )
    });

    return (
        <Layout>
            <div className="card">
                <p>Select a conversation to see the messages : </p>
                <ul className="list">
                    {conversationsList}
                </ul>
            </div>
        </Layout>
    )
}

/* export const getStaticPaths = async () => {
    const req = await fetch('http://localhost:3005/users');
    const data = await req.json();
    const paths = data.map((currentUser) => {
        return {
            params: { id: currentUser.id.toString() }
        }
    });

    return {
        paths,
        fallback: false,
    }
}*/

export const getServerSideProps = wrapper.getServerSideProps(store => async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:3005/conversations/${id}`);
    const data = await res.json();
    //store.dispatch(storeUser(data.id));

    return {
        props : {
            conversation: data,
        }
    }
});

export default ConversationPage;