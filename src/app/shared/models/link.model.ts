export class Link{
    constructor(public urlPath: string="", 
                public linkName : string="",
                public subLinks : Array<Link> = new Array<Link>()){}
}