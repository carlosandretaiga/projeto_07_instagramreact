function Story (props) {
    return (
        <div class="story">
          <div class="imagem">
            <img src={props.image} />
          </div>
          <div class="usuario">
            {props.name}
          </div>
        </div>
    )
}

export default function Stories () {

    const items = [
        {
            image: "assets/img/9gag.svg",
            name: "9gag"
        },
         
        {
            image: "assets/img/meowed.svg",
            name: "meowed"
        },

        {
            image: "assets/img/barked.svg",
            name: "barked"

        }, 

        {
            image: "assets/img/nathanwpylestrangeplanet.svg", 
            name: "nathanwpylestrangeplanet"
        },

        {
            image: "assets/img/wawawicomics.svg",
            name: "wawawicomics"
        }, 

        {
            image: "assets/img/respondeai.svg", 
            name: "respondeai" 
        }, 

        {
            image: "assets/img/filomoderna.svg",
            name: "filomoderna"
        }, 

        {
            image: "assets/img/memeriagourmet.svg", 
            name: "memeriagourmet"
        }
    ];

    return (
        <div class="stories">
               {items.map(item => 
                    <Story 
                    image={item.image}
                    name={item.name} 
                />)}

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    )
 }