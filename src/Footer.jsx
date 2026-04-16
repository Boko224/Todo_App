export default function Footer({page, setPage}) {

    return(
        <footer className="footer">

            <div className="FNav">
                {page === "task" ? (
          <button className="button" onClick={() => setPage("about")}>
                За Мен
          </button>
        ) : (
          <button className="button" onClick={() => setPage("task")}>
             Обратно към задачите
          </button>
        )}
            </div>

            <p>Todo App &copy; 2026</p>
        </footer>
    )
}