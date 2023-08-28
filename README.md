# Why Api Controller

This is an example that i use to Api Controller in Api Routes.

The target here is to be fast and easy to use.

I could use IoC to inject the dependencies, i know, but i want to keep it simple.

## How to use

First the Controller will extends HttpController, and you can override the HTTP methods, like post, get, put, delete, etc.

```typescript
class SomeController {
    constructor(req: NextApiRequest, res: NextApiResponse) {
        super(req, res)
        this.get = this.MyGetMethod
        this.post = this.MyPostMethod
    }
}
```

Cheers!
