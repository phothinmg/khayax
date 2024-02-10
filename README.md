# Lightweight JSX Runtime

**Only esm**

![logo](https://imagedelivery.net/6bSk6wUa9UOwEesJAZQuoA/0972261b-3339-4c6c-db28-34fb02613000/public)

---
## Install

```shell
npm i khayax
```

```shell
yarn add khayax
```

```shell
pnpm i khayax
```

## Usage

#### `.babelrc`

```json
{
    "presets":[
        [
            "@babel/preset-react", {
                "runtime": "automatic",
                "importSource": "khayax"
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
/** @jsxImportSource khayax */
```

#### Example

```jsx
import { render } from "khayax";

const App = () => (
    <h1>Hello World</h1>
);

render(<App />, document.getElementById('app'));
```

With JSX comment

```jsx

/** @jsxImportSource khayax */

import { render } from "khayax";

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

import { render } from "khayax";

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