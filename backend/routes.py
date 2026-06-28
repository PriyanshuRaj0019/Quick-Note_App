from flask import request, jsonify
from database import db
from models import Note


def register_routes(app):

    @app.route("/notes", methods=["GET"])
    def get_notes():

        notes = Note.query.order_by(Note.created_at.desc()).all()

        data = []

        for note in notes:
            data.append({
                "id": note.id,
                "note": note.note,
                "created_at": note.created_at.strftime("%d-%m-%Y %H:%M")
            })

        return jsonify(data)


    @app.route("/notes", methods=["POST"])
    def add_note():

        data = request.get_json()

        note_text = data.get("note")

        if not note_text:
            return jsonify({
                "message": "Note cannot be empty."
            }), 400

        note = Note(note=note_text)

        db.session.add(note)
        db.session.commit()

        return jsonify({
            "message": "Note added successfully."
        }), 201


    @app.route("/notes/<int:id>", methods=["DELETE"])
    def delete_note(id):

        note = Note.query.get(id)

        if not note:
            return jsonify({
                "message": "Note not found."
            }), 404

        db.session.delete(note)
        db.session.commit()

        return jsonify({
            "message": "Note deleted successfully."
        })