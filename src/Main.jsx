const Main = (props) => {
return(
    
    <div className="content">
      <div className="alal">
        {props.array.map((item, index) => {
          return <div className="tag">{item}
          <button onClick={() => props.handleRemove(index)} className="deleteTags">x</button>
          </div>;
        })}
      </div>
      </div>
)
}
export default Main;