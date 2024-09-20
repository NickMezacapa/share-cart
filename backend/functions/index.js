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
exports.shareCart = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const { items } = req.body

  if (!items || !Array.isArray(items)) {
    return res.status(400).send('Invalid cart items')
  }

  // Save items to Firestore
  const cartRef = await admin.firestore().collection('carts').add({ items })

  // Create a shareable link (simple example, can be improved)
  const shareableLink = `https://your-firebase-url.com/carts/${cartRef.id}`

  return res.status(200).json({ shareableLink })
})
