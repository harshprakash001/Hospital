// components/MyComponent.js
const MyComponent = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>This is my component.</p>

            {/* Styles using styled-jsx */}
            <style jsx>{`
                div {
                    padding: 20px;
                    background-color: #f0f0f0;
                }
                h1 {
                    color: blue;
                }
                p {
                    font-size: 16px;
                    color: gray;
                }
            `}</style>
        </div>
    );
};

export default MyComponent;
