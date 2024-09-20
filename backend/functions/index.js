/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require('firebase-functions/v2/https')
const logger = require('firebase-functions/logger')

const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

// Function to share cart items
const { v4: uuidv4 } = require('uuid'); // to generate UUIDs

exports.shareCart = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { items, cartName } = req.body;

  if (!items || !Array.isArray(items)) {
    return res.status(400).send('Invalid cart items');
  }

  // Use cartName if provided, else generate UUID
  const cartId = cartName || uuidv4();

  // Save items to Firestore with the unique cart ID
  const cartRef = admin.firestore().collection('carts').doc(cartId);
  await cartRef.set({ items });

  // Create a shareable link
  const shareableLink = `https://your-firebase-url.com/carts/${cartId}`;

  return res.status(200).json({ shareableLink });
});

exports.getCart = functions.https.onRequest(async (req, res) => {
  const cartId = req.query.cartId; // Get cart ID from query parameters

  if (!cartId) {
    return res.status(400).send('Cart ID is required');
  }

  try {
    const cartSnapshot = await admin.firestore().collection('carts').doc(cartId).get();

    if (!cartSnapshot.exists) {
      return res.status(404).send('Cart not found');
    }

    const cartData = cartSnapshot.data();
    res.status(200).send(cartData);
  } catch (error) {
    res.status(500).send('Error fetching cart data: ' + error);
  }
});
