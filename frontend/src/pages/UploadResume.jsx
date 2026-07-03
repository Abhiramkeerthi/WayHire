import Layout from "../components/Layout";
import ProgressTracker from "../components/ProgressTracker";

function UploadResume() {
  return (
    <Layout>

      <ProgressTracker current={0} />

      <h1>Upload Resume</h1>

    </Layout>
  );
}

export default UploadResume;