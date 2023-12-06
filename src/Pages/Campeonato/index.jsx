import bienestar from '../../Assets/Bienestar.jpg'
import Select from 'react-select'
const Campeonato = () => { 
    const Categoria = [
        {label: 'Masculino', value: 'Masculino'},
        {label: 'Femenino', value: 'Femenino'},
        {label: 'Mixto', value: 'Mixto'},
    ]
    const Disciplina = [
        {label : 'MicroFutbol', value: 'MicroFutbol'},
        {label: 'Futbol Sala', value: 'Futbol Sala'},
        {label: 'Futbol', value: 'Futbol'}
    ]

    const Modalidad = [
        {label: 'Interfichas', value:'Interfichas'},
        {label: 'Relampago', value: 'Relampago'}
    ]

    const handleSelectChange = (event) => {
        console.log(event)
    }
    return (
        <>
       
        <div className='absolute w-2/3'>
        <span className='absolute flex justify-end'>
        <img className=' h-16 ' src={bienestar}></img>
        </span>
            <h1 className="font-bold text-xl text-center mt-9">CREAR CAMPEONATO</h1>
        <span className="">
        <form className="flex flex-col justify-center items-center gap-6">
                <label ></label>
                <input className="required: w-2/3 border-2 border-black/60 hover:border-green-400 rounded-lg" type="text" placeholder="Nombre del Campeonato" />
               <span className='relative flex flex-row gap-14'>
                
                <div className='flex flex-col gap-6'>
                <textarea className="border-2 border-black/60 hover:border-green-400 rounded-lg" name="" id="" cols="30" rows="10" placeholder="Descripcion del campeonato"></textarea>
                                <label className="flex flex-row gap-2">Fecha de Inicio: 
                    <input className="border-2 border-black hover:bg-green-200 rounded-lg" type="date" /> </label>
                    <div className='flex flex-row gap-2'> 
            Disciplina <Select 
            defaultValue={{label:'Seleccione una opcion', value:'default'}}
            options={Disciplina}
            onChange={handleSelectChange}
            />
             </div> 
                </div>  


          <div className='flex flex-col gap-6'>

            <textarea className="border-2 border-black/60 hover:border-green-400 rounded-lg" name="" id="" cols="30" rows="10" placeholder="Mensaje para promover el deporte"></textarea>
            <label className="flex flex-row gap-2">Fecha de Cierre:
                    <input className="border-2 border-black hover:bg-green-200 rounded-lg" type="date" /> </label>
           
           <div className='flex flex-row gap-2'> 
            Categoria <Select 
            defaultValue={{label:'Seleccione una opcion', value:'default'}}
            options={Categoria}
            onChange={handleSelectChange}
            />
            </div>
            </div>
 
            </span>
            
            <div className='flex flex-row gap-2 '> 
            Modalidad <Select className='hover:bg-green-400 bg-green-600'
            defaultValue={{label:'Seleccione una opcion', value:'default'}}
            options={Modalidad}
            onChange={handleSelectChange}
            />
            </div>

            <span className='flex flex-row justify-center m-5 gap-60'>
            <button type='submit' className='text-xl font-bold p-1 rounded-lg border-2 border-black bg-green-200 hover:bg-green-300' >Guardar</button>
            <button type='reset' className='font-bold text-lg p-1 rounded-lg border-2 border-black bg-green-200 hover:bg-green-300' >Borrar</button>
            </span>
            </form>
            </span>
        </div>
</>
    )
}
export default Campeonato