function Title(props) {
  return (
    <div className="h-24 bg-blue600 flex items-center justify-center">
        <h1 className="text-white text-[32px] font-medium">{props.title}</h1>
      </div>
  )
}

export default Title;