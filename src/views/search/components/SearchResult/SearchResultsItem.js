export default function SearchResultsItem({ name, username, email, phone }) {
    return (
        <div style= {{
            backgroundColor: "#E8E7E7", 
            marginTop: 5, 
            marginBottom: 5, 
            padding: 5, 
            width:"100%"
        }}>
        <p>Name:        {name}</p>
        <p>Username:    {username}</p>
        <p>Email:       {email}</p>
        <p>Phone:       {phone}</p>
        </div>
    )
}