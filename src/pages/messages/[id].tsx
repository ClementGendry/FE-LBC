import { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout/layout";
import Message from "../../components/Message/message";
import Sender from "../../components/Sender/sender";
import { submitMessage } from "../../helpers/messageHelper";
import { MessageInterface } from "../../types/message";

const MessagePage: NextPage<{messages: MessageInterface[], id: number}> = ({ messages, id }): JSX.Element => {
    const [inputVal, setInputVal] = useState("");

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
                <Sender 
                    placeholder="Your message ..."
                    changeListener={(e) => setInputVal(e.target.value)}
                    submitListener={(e) => submitMessage(e, inputVal, id, Router)}
                />
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
            id: id,
        }
    }
};

export default MessagePage;