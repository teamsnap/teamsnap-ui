import Container from './Container';

export default {
  title: 'Components/Experimental/Surfaces/Container',
  component: Container,
};

const Helper = {
  LoremIpsum: ({ num }) => {
    return (
      <>
        {Array.from(Array(num)).map((_, i) => (
          <p key={i} style={{ marginBottom: 16 }}>
            [{i + 1}] Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
            voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
            laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
          </p>
        ))}
      </>
    );
  },
  Wrapper: ({ height = 'auto', children }) => (
    <div style={{
      height,
      position: 'relative',
      margin: '0 0 20px',
      boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.15)'
    }}>
      { children }
      <pre style={{
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#111',
        color: '#fff',
        padding: '0 5px',
      }}>
        Height: { height }
      </pre>
    </div>
  ),
  Bookend: ({ children }) => {
    return (
      <div style={{
        backgroundColor: 'rgb(239, 134, 50)',
        padding: '5px 10px',
        border: '2px solid rgb(200, 95, 10)',
      }}>
        { children }
      </div>
    );
  },
};

export const Default = () => {
  return (
    <Helper.Wrapper height={'auto'}>
      <Container>
        <Container.Header>
          <Helper.Bookend>
            <h1>Container header</h1>
          </Helper.Bookend>
        </Container.Header>

        <Container.Body>
          <div style={{ padding: '10px' }}>
            <h2>Container body</h2>

            <p style={{ marginBottom: 16 }}>
              The Container component is a layout component. It expands to its parent height.
              By default, the header and footer sit at the top and bottom while the body expands to
              fill the remaining height. If the body content is larger than the available space, the
              body becomes scrollable.
            </p>

            <p>
              The Container component deliberately has minimal styling applied to it beyond layout.
            </p>
          </div>
        </Container.Body>

        <Container.Footer>
          <Helper.Bookend>
            <h3>Container footer</h3>
          </Helper.Bookend>
        </Container.Footer>
      </Container>
    </Helper.Wrapper>
  );
};

export const ParentWithSetHeight = () => {
  return (
    <Helper.Wrapper height={'500px'}>
      <Container>
        <Container.Header>
          <Helper.Bookend>
            <h1>Container header</h1>
          </Helper.Bookend>
        </Container.Header>

        <Container.Body>
          <div style={{ padding: '10px' }}>
            <h2>Container body</h2>

            <p style={{ marginBottom: 16 }}>
              Here, the parent has a set height and the container expands to fill it all.
            </p>
          </div>
        </Container.Body>

        <Container.Footer>
          <Helper.Bookend>
            <h3>Container footer</h3>
          </Helper.Bookend>
        </Container.Footer>
      </Container>
    </Helper.Wrapper>
  );
};

export const ContainerOverflowsParent = () => {
  return (
    <Helper.Wrapper height={'500px'}>
      <Container>
        <Container.Header>
          <Helper.Bookend>
            <h1>Container header</h1>
          </Helper.Bookend>
        </Container.Header>

        <Container.Body>
          <div style={{ padding: '10px' }}>
            <h2>Container body</h2>

            <p style={{ marginBottom: 16 }}>
              Here, the parent has a set height and the container's content becomes scrollable.
            </p>

            <Helper.LoremIpsum num={ 20 } />
          </div>
        </Container.Body>

        <Container.Footer>
          <Helper.Bookend>
            <h3>Container footer</h3>
          </Helper.Bookend>
        </Container.Footer>
      </Container>
    </Helper.Wrapper>
  );
};

export const WithoutStyling = () => {
  return (
    <Helper.Wrapper height={'500px'}>
      <Container>
        <Container.Header>
          <h1>Container header</h1>
        </Container.Header>

        <Container.Body>
          <div style={{ padding: '10px' }}>
            <h2>Container body</h2>

            <p style={{ marginBottom: 16 }}>
              Here, the parent has a set height and the container's content becomes scrollable.
            </p>

            <Helper.LoremIpsum num={ 20 } />
          </div>
        </Container.Body>

        <Container.Footer>
          <h3>Container footer</h3>
        </Container.Footer>
      </Container>
    </Helper.Wrapper>
  );
};
