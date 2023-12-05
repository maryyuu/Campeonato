
import Select from 'react-select'
const Campeonato = () => { 
    const Selects = [
        {label: 'Masculino', value: 'Masculino'},
        {label: 'Femenino', value: 'Femenino'},
        {label: 'Mixto', value: 'Mixto'},
    ]

    const handleSelectChange = (event) => {
        console.log(event)
    }
    return (
        <div>
            <h1 className="font-bold text-xl text-center mt-9">CREAR CAMPEONATO</h1>
        <span className="flex flex-row justify-around">
        <form className="flex flex-col justify-center items-center gap-6">
                <label ></label>
                <input className="border-2 border-black/60 hover:border-green-400 rounded-lg" type="text" placeholder="Nombre del Campeonato" />
                <textarea className="border-2 border-black/60 hover:border-green-400 rounded-lg" name="" id="" cols="30" rows="10" placeholder="Descripcion del campeonato"></textarea>
                                <label className="flex flex-row gap-2">Fecha de Inicio: 
                    <input className="border-2 border-black hover:bg-green-200 rounded-lg" type="date" /> </label>
                <label className="flex flex-row gap-2">Fecha de Cierre:
                    <input className="border-2 border-black hover:bg-green-200 rounded-lg" type="date" /> </label>
                <label>Genero</label>
                <input type="option" />
            </form>
            <form className="flex flex-col justify-center items-center gap-6">
            <textarea className="border-2 border-black/60 hover:border-green-400 rounded-lg" name="" id="" cols="30" rows="10" placeholder="Mensaje para promover el deporte"></textarea>
           <div> 
            Categoria <Select 
            defaultValue={{label:'Seleccione una opcion', value:'default'}}
            options={Selects}
            onChange={handleSelectChange}
            />
            </div>
            </form>
            </span>
        </div>
    )
}
export default Campeonato