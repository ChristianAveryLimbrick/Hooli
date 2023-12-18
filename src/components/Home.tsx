

export default function Home() {
    return (
        <div className="header">
            <Logo />
            <Search />
        </div>
    );
}

const Logo = () => {    
    return (
        <div style={{
            position: 'absolute',
            top: '30%', // Adjust this value as needed
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%' // Ensures text is centered within the full width
        }}>
            <img src="./Hooli.png" alt="" />
        </div>
    );
}

const Search = () => {
    const searchStyles = {
        width: '580px',
        height: '40px',
        borderRadius: '15px',
        margin: 'auto',
        position: 'absolute',
        top: '50%', // Adjust this value as needed
        left: '50%',
        transform: 'translate(-50%, -50%)'
    };

    return (
        <div style={{ height: '100vh' }}>
            <div className="flex border-2 rounded">
                <input 
                    type="text" 
                    style={searchStyles}
                    className="px-4 py-2 focus:outline-none" 
                    placeholder="Test..."
                />
            </div>
        </div>
    );
}
