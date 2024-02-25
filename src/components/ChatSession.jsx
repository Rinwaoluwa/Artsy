import "../animations.css";

function ChatSession({ catBot, user }) {
    return (
        <>
            { catBot &&
                <div className='artsy-cat-chat'>
                    <img className='artsy-cat' src="/images/cat.png" alt="Artsy Cat!" />
                    <p className={`artsy-cat-text fade-in-edit-notice`}>{catBot}</p>
                </div>
            }

            { user && <p className='user-chat fade-out-edit-notice'>{user}</p> }
        </>
    )
}

export default ChatSession
