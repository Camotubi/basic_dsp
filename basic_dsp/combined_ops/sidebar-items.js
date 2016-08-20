initSidebarItems({"enum":[["Operation","An alternative way to define operations on a vector."]],"fn":[["multi_ops1","Creates a new multi operation for one vectors."],["multi_ops2","Creates a new multi operation for two vectors."],["prepare1","Prepares an operation with one input and one output."],["prepare2","Prepares an operation with two inputs and two outputs."]],"struct":[["ComplexFreqIdentifier","Placeholder for a concrete vector."],["ComplexTimeIdentifier","Placeholder for a concrete vector."],["GenericDataIdentifier","Placeholder for a concrete vector."],["MultiOperation1","A multi operation which holds a vector and records all changes which need to be done to the vectors. By calling `get` on the struct all operations will be executed in one run."],["MultiOperation2","A multi operation which holds two vectors and records all changes which need to be done to the vectors. By calling `get` on the struct all operations will be executed in one run."],["PreparedOperation1","An operation on one data vector which has been prepared in advance."],["PreparedOperation2","An operation on two data vectors which has been prepared in advance."],["RealFreqIdentifier","Placeholder for a concrete vector."],["RealTimeIdentifier","Placeholder for a concrete vector."]],"trait":[["ComplexIdentifier","Operations for complex vectors which can be used in combination with multi ops or prepared ops. For a documentation of the specific operations see `ComplexVectorOps`."],["GeneralIdentifier","Operations for all kind of vectors which can be used in combination with multi ops or prepared ops. For a documentation of the specific operations see `GenericVectorOps`."],["Identifier","An identifier is just a placeholder for a vector used to ensure already at compile time that operations are valid."],["IdentifierIter","Allows to map every vector element. with multi ops or prepared ops. For a documentation of the specific operations see `VectorIter`."],["Offset","Offset operations to vectors in combination with multi ops or prepared ops. For a documentation of the specific operations see `Offset`."],["RealIdentifier","Operations for real vectors which can be used on combination with multi ops or prepared ops. For a documentation of the specific operations see `RealVectorOps`."],["Scale","Scale operations to vectors in combination with multi ops or prepared ops. For a documentation of the specific operations see `Scale`."],["ToIdentifier","Trait which defines the relation between a vector and an identifier. "]]});