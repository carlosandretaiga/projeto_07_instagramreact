
export default function Content () {
    
    //logic 
    const paragraphs = ["Meu primeiro parágrafo", "Esse é meu segundo parágrafo"];

    //render 
    return (
        <div class="content">
            {paragraphs.map(paragraph => <p>{paragraph}</p>)}
        </div>
    )
}