"use server";

import clientPromise from "@/lib/mongodb";
import { revalidatePath } from "next/cache";

export async function addDish(formData) {
  try {
    const client = await clientPromise;
    const db = client.db("restaurant-antopolis");
    const collection = db.collection("dishes");

    const name = formData.get("name");
    const category = formData.get("category");
    const rating = formData.get("rating");
    const price = formData.get("price");
    const image = formData.get("image");

    // Validate required fields
    if (!name || !category || !rating || !price) {
      return { error: "Missing required fields" };
    }

    // Create new dish object
    const newDish = {
      name,
      category,
      rating: parseFloat(rating),
      price: parseFloat(price),
      //image: image || "/placeholder.png",
      // disabled image for now
      createdAt: new Date(),
    };

    // Insert the dish
    await collection.insertOne(newDish);

    // Revalidate the page to show new data
    revalidatePath("/");

    // Return only serializable data
    return {
      success: true,
      message: "Dish added successfully",
    };
  } catch (error) {
    console.error("Error adding dish:", error);
    return { error: "Failed to add dish" };
  }
}

export async function getDishes() {
  try {
    const client = await clientPromise;
    const db = client.db("restaurant-antopolis");
    const collection = db.collection("dishes");

    const dishes = await collection.find({}).toArray();

    // Convert to plain objects for client components
    const serializedDishes = dishes.map((dish) => ({
      id: dish._id.toString(),
      name: dish.name,
      category: dish.category,
      rating: dish.rating,
      price: dish.price,
      // image: dish.image,
      // disabled image for now
      createdAt: dish.createdAt
        ? dish.createdAt.toISOString()
        : new Date().toISOString(),
    }));

    return serializedDishes;
  } catch (error) {
    console.error("Error fetching dishes:", error);
    return [];
  }
}
