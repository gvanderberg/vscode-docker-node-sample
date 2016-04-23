import IArticleModel = require("./interfaces/ArticleModel");

class ArticleModel {
    private _articleModel: IArticleModel;

    constructor(articleModel: IArticleModel) {
        this._articleModel = articleModel;
    }

    get author(): Object {
        return this._articleModel.author;
    }

    get slug(): string {
        return this._articleModel.slug;
    }

    get title(): string {
        return this._articleModel.title;
    }

    get body(): string {
        return this._articleModel.body;
    }

    get comments(): any {
        return this._articleModel.comments;
    }

    get tags(): any {
        return this._articleModel.tags;
    }

    get createdAt(): Date {
        return this._articleModel.createdAt;
    }
}

Object.seal(ArticleModel);

export = ArticleModel;