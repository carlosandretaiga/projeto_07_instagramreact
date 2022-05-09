function Post (props) {
    return (
        <div class="post">
            <div class="topo">
            <div class="usuario">
                <img src={props.profileImage} />
                {props.profileName}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

            <div class="conteudo">
            <img src={props.image} />
            </div>

            <div class="fundo">
            <div class="acoes">
                <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.likeImage} />
                <div class="texto">
                Curtido por <strong>{props.likeProfile}</strong> e <strong>outras {props.likesNumber} pessoas</strong>
                </div>
            </div>
            </div>
        </div>
    )
}



export default function Posts () {


    const items = [
        {
            profileImage: "assets/img/meowed.svg",
            profileName: "meowed",
            image: "assets/img/gato-telefone.svg",
            likeImage: "assets/img/respondeai.svg",
            likeProfile: "respondeai",
            likesNumber:  "101.523"
        }, 

        {
            profileImage: "assets/img/barked.svg", 
            profileName: "barked",
            image: "assets/img/dog.svg",
            likeImage: "assets/img/adorable_animals.svg",
            likeProfile: "adorable_animals",
            likesNumber: "199.159"
        }

    ]; 

    return (
        <div class="posts">
                {items.map(item => 
                    <Post 
                    profileImage={item.profileImage}
                    profileName={item.profileName} 
                    image={item.image} 
                    likeImage={item.likeImage}
                    likeProfile={item.likeProfile}
                    likesNumber = {item.likesNumber}
                />)}

        </div>
    )
}