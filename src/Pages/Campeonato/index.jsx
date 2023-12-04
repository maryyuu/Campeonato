const Campeonato = () => { 

    return (
        <div>
            <h1 className="font-bold text-xl text-center mt-9">CREAR CAMPEONATO</h1>
        <form className="flex flex-col justify-center items-center gap-6">
                <label ></label>
                <input className="border-2 border-black/60 hover:border-green-400 rounded-lg" type="text" placeholder="Nombre del Campeonato" />
                <textarea className="border-2 border-black/60 hover:border-green-400 rounded-lg" name="" id="" cols="30" rows="10" placeholder="Descripcion del campeonato"></textarea>
                <textarea className="border-2 border-black/60 hover:border-green-400 rounded-lg" name="" id="" cols="30" rows="10" placeholder="Mensaje para promover el deporte"></textarea>
                <label className="flex flex-row gap-2">Fecha de Inicio: 
                    <input className="border-2 border-black hover:bg-green-200 rounded-lg" type="date" /> </label>
                <label className="flex flex-row gap-2">Fecha de Cierre:
                    <input className="border-2 border-black hover:bg-green-200 rounded-lg" type="date" /> </label>
                <label>Genero</label>
                <input type="option" />
            </form>
            
        </div>
    )
}
export default Campeonato