// booksData.js
export const booksData = Array.from({ length: 100 }, (_, index) => {
    const categories = ["Story", "Mystery"];
    const authors = [
      "John Doe", "Jane Smith", "Mark Twain", "Robert Brown", 
      "Emily Green", "Sarah King", "Anna Lee", "David White", 
      "Olivia Martinez", "Agatha Christie"
    ];
    const bookNames = [
      "The Great Adventure", "The Haunted House", "Life of a Hero", 
      "The Silent Killer", "Love & Loss", "The Last Clue", 
      "The Ocean's Promise", "The Vanishing Point", "Whispers of the Past", 
      "Murder on the Orient Express"
    ];
    const ratings = [3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9];
    const prices = [14.99, 15.99, 16.49, 17.59, 18.99, 19.49, 19.99, 21.49, 23.99, 25.00];
  
    return {
      id: index + 1,
      category: categories[Math.floor(Math.random() * categories.length)],
      name: bookNames[Math.floor(Math.random() * bookNames.length)],
      author: authors[Math.floor(Math.random() * authors.length)],
      price: prices[Math.floor(Math.random() * prices.length)],
      rating: ratings[Math.floor(Math.random() * ratings.length)],
    };
  });
  