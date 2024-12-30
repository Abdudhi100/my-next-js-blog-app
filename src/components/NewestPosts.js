export default function NewestPosts(){
    const posts = [
        {id: 1, title: 'Understanding React Hooks', intro: 'A deep dive into the React hooks API.'},
        {id: 2, title: 'Mastering javaScript closures', intro: 'Simplify closures with real-world examples.'},
        {id: 3, title: 'CSS Grid for beginners', inro: 'Learn the power of CSS Grid with hands-on experience examples.'},

    ];
    
    return (
        <section style={{ padding: '2rem'}}>
            <h2>Newest Posts</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {posts.map (post=>(
                    <li key={post.id} style={{marginBottom: '1.5rem'}}>
                        <h3>{post.title}</h3>
                        <p>{post.intro}</p>
                        <a href={'/post${post.id}'} style={{ color: '#0070f3'}}>Read More</a>

                    </li>
                )

                )}

            </ul>
        </section>
    )
}