

const Buttons = (props) => {
    return (
        <>
            <button className="px-6 py-1 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all rounded-full">
                {props.title}
            </button>
        </>
    )
}

export default Buttons