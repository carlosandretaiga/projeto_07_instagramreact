function MenuItem (props) {
    return (
        <li>
            <img width = "18" src={props.image} />
            <a href={props.link}>
            {props.title}
            </a>
        </li>
    )
}


export default function Menu () {
    

    const items = [
        {
            title: "Amigos", 
            link: "/amigos", 
            image: "https://cdn-icons-png.flaticon.com/512/1141/1141078.png"
        },
        {
            title: "Página de recados", 
            link: "/recados", 
            image: "https://cdn-icons-png.flaticon.com/512/1141/1141078.png"
        },
        {
            title: "Comunidades", 
            link: "/comunidades", 
            image: "https://cdn-icons-png.flaticon.com/512/1141/1141078.png"
        }
    ]

    
    return (
        <div class="menu"> 
            <ul>
                {items.map(item => <MenuItem title={item.title} link={item.link} image={item.image} />)}
            </ul>
        </div>
    )
}