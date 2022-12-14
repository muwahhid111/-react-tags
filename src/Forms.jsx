const Forms = (props) => {
return(
    <form onSubmit={props.handleAdd} className="form">
          <input  onBlur={props.handleBlur} value={props.value} className={props.error ? 'Text2' : 'Text'} onChange={props.handleValue} />
          <button disabled={!props.value}  type="submit" className="ButAdd">
            Отправить
          </button>
        </form>
)
}
export default Forms