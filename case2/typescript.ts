interface IComment {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
}

const commentData: IComment[] = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

function countComment(comments: IComment[]): number {
  let count = 0;

  function recursiveCount(commentsArray: IComment[]): void {
    commentsArray.forEach((comment) => {
      count++;
      if (comment.replies && comment.replies.length > 0) {
        recursiveCount(comment.replies);
      }
    });
  }

  recursiveCount(comments);
  return count;
}

console.log("Total Komentar : ", countComment(commentData));
