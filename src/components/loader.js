import "../assets/loader.css"

export default function Loader(){

    return(
        <>
        <div className="wrapper">
  <div className="book-loader-container">
    <div className="spine"></div>
    <div className="page" style={{'--page-num': 1}}></div>
    <div className="page" style={{'--page-num': 2}}></div>
    <div className="page" style={{'--page-num': 3}}></div>
    <div className="page" style={{'--page-num': 4}}></div>
    <div className="page static right"></div>
    <div className="page static left"></div>
  </div>
</div>
        </>
    )

}
