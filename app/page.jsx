import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h2>Dashboard</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo,
        voluptatibus ipsa libero fugiat ullam ad adipisci consectetur eius,
        eveniet debitis, reiciendis dolorem accusantium fugit aliquid rem veniam
        beatae. Iure ex sint officia modi corrupti, ut eius alias maiores
        ducimus et eum iusto, quidem quod possimus nostrum eveniet, voluptas
        magni.
      </p>
      <div className="flex justify-center my-8">
        <Link href="tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
      <h2>Company Updates</h2>
      <div className="card">
        <h2>New Member Of The Web Dev Team ...</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          consequatur necessitatibus fuga qui harum praesentium commodi expedita
          ducimus ex autem!
        </p>
      </div>
      <div className="card">
        <h2>New Website Live !!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit
          facilis delectus amet, adipisci aspernatur odit commodi aut quam
          laboriosam repudiandae mollitia numquam iusto vel temporibus, quae ex
          alias exercitationem.
        </p>
      </div>
    </main>
  );
}
