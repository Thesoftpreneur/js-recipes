import { faker } from "@faker-js/faker";

function Post() {
    this.title = faker.commerce.productName();
    this.body = faker.commerce.productDescription();
    this.author = faker.person.fullName();
    this.views = faker.number.int();
    this.isLive = true;
    this.comments = [

    ];
    this.addComment = function() {
        this.comments.push(new Comment());
    }
}

function Comment() {
    this.author = faker.person.fullName();
    this.body = faker.lorem.sentences();

}

let post = new Post();
post.addComment();
post.addComment();
post.addComment();

console.log(post);