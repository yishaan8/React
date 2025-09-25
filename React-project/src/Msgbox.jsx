function Msgbox({username,textcolor}) {
    return (
        <div style={{color:textcolor}}>
            <h3>Welcome {username}</h3>
        </div>
    )
}
export default Msgbox;