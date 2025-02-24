import asyncHandler from "express-async-handler"
import Contact from "../models/contact.model.js"
// @des  Get Contacts
// @route GET /api/contacts
//@access public

export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find()
  res.status(200).json(contacts)
})

// @des  Get Contact by id
// @route GET /api/contacts/:id
//@access public

export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (!contact) {
    res.status(404)
    throw new Error("Contact not found")
  }
  res.status(200).json(contact)
})

// @des  Create Contact
// @route POST /api/contacts
//@access public

export const createContact = asyncHandler(async (req, res) => {
  console.log("This is my contact data .", req.body)
  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    res.status(400)
    throw new Error("All fields are mandatory")
  }
  const contact = await Contact.create({ name, email, phone })
  res.status(201).json(contact)
})

// @des  Update Contact
// @route PUT /api/contacts/:id
//@access public

export const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id}` })
})

// @des  Delete Contact
// @route DELETE /api/contacts/:id
//@access public

export const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` })
})
