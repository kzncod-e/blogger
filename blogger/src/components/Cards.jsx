export default function Card({ posts }) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>titke</th>
              <th>content</th>
              <th>imgUrl</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((el) => (
              <tr key={el.id}>
                <th>{el.id}</th>
                <td>{el.title}</td>
                <td>{el.content}</td>
                <td>
                  <img src={el.imgUrl} alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
