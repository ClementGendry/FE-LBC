import { NextPage } from "next";
import Layout from "../../components/Layout/layout";
import Message from "../../components/Message/message";
import { MessageInterface } from "../../types/message";

const MessagePage: NextPage<{messages: MessageInterface[]}> = ({ messages }): JSX.Element => {
    const messagesList = messages.map(message => {
        return (
        <li className="listEl" key={message.id}>
            <Message {...message} />
        </li>
    )});
    return(
        <Layout>
            <div className="card">
                <ul className="list">
                    {messagesList}
                </ul>
            </div>
        </Layout>
    );
}

export const getServerSideProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:3005/messages/${id}`);
    const data = await res.json();

    return {
        props : {
            messages: data,
        }
    }
};

export default MessagePage;