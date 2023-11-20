const renderNode = (node: any) => {
    if (node._type === 'block') {
      return <p key={node._key}>{renderChildren(node.children)}</p>;
    }
  
    if (node._type === 'span') {
      return <span key={node._key}>{node.text}</span>;
    }
  
    // Handle other node types if needed
  
    return null;
  };
  
  const renderChildren = (children: any) => {
    return children.map((child: any) => renderNode(child));
  };
  
  const AuthorRichTextComponent = ({ bio }: any) => {
    return <div>{renderChildren(bio)}</div>;
  };
  
  export default AuthorRichTextComponent;