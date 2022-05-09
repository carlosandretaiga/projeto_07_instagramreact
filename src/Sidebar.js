function SidebarSuggestion (props) {
    return (
        <div class="sugestao">
              <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                  <div class="nome">{props.name}</div>
                  <div class="razao">{props.reason}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
        </div>
    )
}

function UserSuggestion (props) {
    return (
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
              <strong>{props.nameProfile}</strong>
              {props.name}
            </div>
        </div>

    )
}



export default function Sidebar () { 


    const items = [
        {
            image:"assets/img/bad.vibes.memes.svg",
            name: "bad.vibes.memes",
            reason: "Segue você"
        },
         
        {
            image: "assets/img/chibirdart.svg",
            name: "chibirdart",
            reason: "Segue você"
        },

        {
            image: "assets/img/razoesparaacreditar.svg",
            name: "razoesparaacreditar",
            reason: "Novo no Instagram"

        }, 

        {
            image: "assets/img/adorable_animals.svg",
            name: "adorable_animals",
            reason: "Segue você"
        },

        {
            image: "assets/img/smallcutecats.svg",
            name: "smallcutecats",
            reason: "Segue você"
        }
    ];

    const itemsUserSuggestions = [
        {
            image: "assets/img/catanacomics.svg",
            nameProfile: "catanacomics",
            name: "Iêda Catana" 
        }
    ]


    return (

        <div class="sidebar">

           {itemsUserSuggestions.map(item => 
                    <UserSuggestion
                    image={item.image}
                    nameProfile={item.nameProfile} 
                    name={item.name}        
            />)}

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {items.map(item => 
                    <SidebarSuggestion
                    image={item.image}
                    name={item.name} 
                    reason={item.reason} 
                    
            />)}

          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>

    )
}