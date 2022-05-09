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

    return (
        <div class="stories">
        <Story image="assets/img/9gag.svg" name="9gag" /> 
        <Story image="assets/img/meowed.svg" name="meowed" />
        <Story image="assets/img/barked.svg" name="barked" />
        <Story image="assets/img/nathanwpylestrangeplanet.svg" name="nathanwpylestrangeplanet" />
        <Story image="assets/img/wawawicomics.svg" name="wawawicomics" />
        <Story image="assets/img/respondeai.svg" name="respondeai" />
        <Story image="assets/img/filomoderna.svg" name="filomoderna" />
        <Story image="assets/img/memeriagourmet.svg" name="memeriagourmet" />
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    )
 }