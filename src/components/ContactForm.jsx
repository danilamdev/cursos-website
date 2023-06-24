import { toast } from "sonner"

export default function ContactForm (){

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)
    
    try {
      response = await fetch('http://localhost:8787', {
        method: 'POST',
        body: formdata,
        Headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
          // "Access-Control-Allow-Origin": "*",
        }
      })

      if(!response.ok) throw new Error('error enviando el mensaje. Intente nuevamente')
       
      const json = await response.json()


    } catch (error) {
      toast.error('Error al enviar el mensaje. Intente nuevamente.')
    }

  }
  return (
    <div className="form">
          <form className="space-y-7 lg:px-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-slate-700 text-sm lg:text-base" htmlFor="nombre"
                >nombre</label
              >
              <input
                className="bg-white rounded border border-slate-200 p-2 focus:outline focus:outline-blue-500"
                type="text"
                id="nombre"
                name="nombre"
                required
                aria-required="true"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-slate-700 text-sm lg:text-base" htmlFor="email"
                >email</label
              >
              <input
                className="bg-white rounded border border-slate-200 p-2 focus:outline focus:outline-blue-500"
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-slate-700 text-sm lg:text-base" htmlFor="mensaje"
                >mensaje</label
              >
              <textarea
                className="bg-white rounded border border-slate-200 p-2 resize-none focus:outline focus:outline-blue-500"
                id="mensaje"
                name="mensaje"
                required
                aria-required="true"
                rows="8"></textarea>
            </div>

            <button
              className="text-center text-lg bg-blue-500 rounded w-full text-white py-3 hover:bg-blue-600 transition-colors"
              >enviar</button
            >

            <p className="text-sm text-center text-slate-700">
              o comunícate por <span className="text-green-400 font-bold"
                ><a href="https://wa.me/+5491166271951" target="_blank">whatsapp</a
                ></span
              >
            </p>
          </form>
        </div>
  )
}