import React from "react";

const commentsData = [
  {
    name: "Ashwath",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Ashwath",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Ashwath",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "Ashwath",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
  {
    name: "Ashwath",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Ashwath",
        text: "Lorem ipsum dolor sit amet",
        replies: [
          {
            name: "Ashwath",
            text: "Lorem ipsum dolor sit amet",
            replies: [
              {
                name: "Ashwath",
                text: "Lorem ipsum dolor sit amet",
                replies: [
                  {
                    name: "Ashwath",
                    text: "Lorem ipsum dolor sit amet",
                    replies: [
                      {
                        name: "Ashwath",
                        text: "Lorem ipsum dolor sit amet",
                        replies: [
                          {
                            name: "Ashwath",
                            text: "Lorem ipsum dolor sit amet",
                            replies: [
                              {
                                name: "Ashwath",
                                text: "Lorem ipsum dolor sit amet",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Ashwath",
        text: "Lorem ipsum dolor sit amet",
        replies: [
          {
            name: "Ashwath",
            text: "Lorem ipsum dolor sit amet",
            replies: [
              {
                name: "Ashwath",
                text: "Lorem ipsum dolor sit amet",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ashwath",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Ashwath",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Ashwath",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
  {
    name: "Ashwath",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Ashwath",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-md bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    //Disclamir never use index as a key
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-8 border border-l-black ">
        {/* component recursion */}
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
