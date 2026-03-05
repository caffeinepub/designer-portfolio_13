import Array "mo:core/Array";
import List "mo:core/List";

actor {
  type Message = {
    name : Text;
    email : Text;
    message : Text;
  };

  let messages = List.empty<Message>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let newMessage : Message = {
      name;
      email;
      message;
    };
    messages.add(newMessage);
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.toArray();
  };
};
