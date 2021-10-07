export default function Instrumentos() {
    return (
        <div className="card title">
            <h1 className="text-center"> Instrumentos Musicais </h1>
            <p></p>
            <table className="table table-sm table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Instrumento Musical</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Violino</td>
                        <td>R$1.200,00</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Sax Tenor</td>
                        <td>R$5.270,00</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Clarinete</td>
                        <td>R$3.245,99</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
