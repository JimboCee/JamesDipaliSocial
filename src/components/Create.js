const Create = () => {
    return (
        <div className="create">
            <h2>Add a New Post</h2>
            <form>
                <label>Post Title</label>
                <input 
                    type="text"
                    required
                    />
                    <label>Post Body</label>
                <textarea
                    required
                ></textarea>
                </form>
        </div>
    )
}