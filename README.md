# Lightweight JSX Runtime

**Only esm**

## Install

```bash
npm i @inovar/inox -D
```

## Usage

#### `.babelrc`

```json
{
    "presets":[
        [
            "@babel/preset-react", {
                "runtime": "automatic",
                "importSource": "@inovar/inox"
            }
        ]
    ]
}

```

#### `rollup.config.js`

```javascript
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
export default{
    input: 'index.jsx',
    output: {
		format: 'es',
		file: 'index.js'
	},
    plugins:[
        resolve(), 
        babel({ 
            babelHelpers: 'bundled' 
        })
    ],
}
```

#### `JSX Comment`

**Without useing Babel : comment before the JSX code**

```javascript
/** @jsxImportSource @inovar/inox */
```

#### Example

```jsx
import { render } from "@inovar/inox";

const App = () => (
    <h1>Hello World</h1>
);

render(<App />, document.getElementById('app'));
```

With JSX comment

```jsx

/** @jsxImportSource @inovar/inox */

import { render } from "@inovar/inox";

const BlogPost = ({content}) => (
    <span>{content}</span>
);

const Wapper = ({children}) => (
    <div>{children}</div>
);

const App = () => (
    <Wapper>
        <BlogPost content={'Hello World'} />
    </Wapper>
)


render(<App />, document.getElementById('app'));

```

#### `async`

```jsx

import { render } from "@inovar/inox";

const App = async() => {

    var api = await fetch(`https://jsonplaceholder.typicode.com/users/2`);
    var user = await api.json();

    return (
        <div>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <p>Website : {user.website}</p>
        </div>
    )
}
render(<App />, document.getElementById('app'));

```