const Winner = (props) => {
    const handleReset = () => {
        props.rstGame;
    }

    return (
        <div className="flex flex-col items-center -gap-4">
            <h1 className="font-bold text-4xl text-rose-700 flex animate-pulse">Winner, Winner, Chicken Dinner!</h1>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onCLick ={handleReset}>Restart Game</button>
        </div>
    )
}

export default Winner