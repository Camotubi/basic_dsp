(function() {var implementors = {};
implementors["basic_dsp_matrix"] = ["impl&lt;S:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/requirements/trait.ToSliceMut.html' title='basic_dsp_vector::vector_types::requirements::ToSliceMut'>ToSliceMut</a>&lt;T&gt;, T:&nbsp;<a class='trait' href='basic_dsp_vector/trait.RealNumber.html' title='basic_dsp_vector::RealNumber'>RealNumber</a>, N:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.NumberSpace.html' title='basic_dsp_vector::vector_types::NumberSpace'>NumberSpace</a>, D:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.Domain.html' title='basic_dsp_vector::vector_types::Domain'>Domain</a>&gt; <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;&gt; for <a class='struct' href='basic_dsp_matrix/struct.MatrixMxN.html' title='basic_dsp_matrix::MatrixMxN'>MatrixMxN</a>&lt;<a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;, S, T&gt; <span class='where'>where <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;: <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;&gt;</span>","impl&lt;S:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/requirements/trait.ToSliceMut.html' title='basic_dsp_vector::vector_types::requirements::ToSliceMut'>ToSliceMut</a>&lt;T&gt;, T:&nbsp;<a class='trait' href='basic_dsp_vector/trait.RealNumber.html' title='basic_dsp_vector::RealNumber'>RealNumber</a>, N:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.NumberSpace.html' title='basic_dsp_vector::vector_types::NumberSpace'>NumberSpace</a>, D:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.Domain.html' title='basic_dsp_vector::vector_types::Domain'>Domain</a>&gt; <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;&gt; for <a class='struct' href='basic_dsp_matrix/struct.Matrix2xN.html' title='basic_dsp_matrix::Matrix2xN'>Matrix2xN</a>&lt;<a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;, S, T&gt; <span class='where'>where <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;: <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;&gt;</span>","impl&lt;S:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/requirements/trait.ToSliceMut.html' title='basic_dsp_vector::vector_types::requirements::ToSliceMut'>ToSliceMut</a>&lt;T&gt;, T:&nbsp;<a class='trait' href='basic_dsp_vector/trait.RealNumber.html' title='basic_dsp_vector::RealNumber'>RealNumber</a>, N:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.NumberSpace.html' title='basic_dsp_vector::vector_types::NumberSpace'>NumberSpace</a>, D:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.Domain.html' title='basic_dsp_vector::vector_types::Domain'>Domain</a>&gt; <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;&gt; for <a class='struct' href='basic_dsp_matrix/struct.Matrix3xN.html' title='basic_dsp_matrix::Matrix3xN'>Matrix3xN</a>&lt;<a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;, S, T&gt; <span class='where'>where <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;: <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;&gt;</span>","impl&lt;S:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/requirements/trait.ToSliceMut.html' title='basic_dsp_vector::vector_types::requirements::ToSliceMut'>ToSliceMut</a>&lt;T&gt;, T:&nbsp;<a class='trait' href='basic_dsp_vector/trait.RealNumber.html' title='basic_dsp_vector::RealNumber'>RealNumber</a>, N:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.NumberSpace.html' title='basic_dsp_vector::vector_types::NumberSpace'>NumberSpace</a>, D:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.Domain.html' title='basic_dsp_vector::vector_types::Domain'>Domain</a>&gt; <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;&gt; for <a class='struct' href='basic_dsp_matrix/struct.Matrix4xN.html' title='basic_dsp_matrix::Matrix4xN'>Matrix4xN</a>&lt;<a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;, S, T&gt; <span class='where'>where <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;: <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;&gt;</span>","impl&lt;'a, S:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/requirements/trait.ToSliceMut.html' title='basic_dsp_vector::vector_types::requirements::ToSliceMut'>ToSliceMut</a>&lt;T&gt;, T:&nbsp;<a class='trait' href='basic_dsp_vector/trait.RealNumber.html' title='basic_dsp_vector::RealNumber'>RealNumber</a>, N:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.NumberSpace.html' title='basic_dsp_vector::vector_types::NumberSpace'>NumberSpace</a>, D:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.Domain.html' title='basic_dsp_vector::vector_types::Domain'>Domain</a>&gt; <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;&amp;'a <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;&amp;'a <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;&gt;&gt;&gt; for <a class='struct' href='basic_dsp_matrix/struct.MatrixMxN.html' title='basic_dsp_matrix::MatrixMxN'>MatrixMxN</a>&lt;<a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;, S, T&gt;","impl&lt;'a, S:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/requirements/trait.ToSliceMut.html' title='basic_dsp_vector::vector_types::requirements::ToSliceMut'>ToSliceMut</a>&lt;T&gt;, T:&nbsp;<a class='trait' href='basic_dsp_vector/trait.RealNumber.html' title='basic_dsp_vector::RealNumber'>RealNumber</a>, N:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.NumberSpace.html' title='basic_dsp_vector::vector_types::NumberSpace'>NumberSpace</a>, D:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.Domain.html' title='basic_dsp_vector::vector_types::Domain'>Domain</a>&gt; <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>&amp;'a <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 2]</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 2]</a>&gt; for <a class='struct' href='basic_dsp_matrix/struct.Matrix2xN.html' title='basic_dsp_matrix::Matrix2xN'>Matrix2xN</a>&lt;<a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;, S, T&gt;","impl&lt;'a, S:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/requirements/trait.ToSliceMut.html' title='basic_dsp_vector::vector_types::requirements::ToSliceMut'>ToSliceMut</a>&lt;T&gt;, T:&nbsp;<a class='trait' href='basic_dsp_vector/trait.RealNumber.html' title='basic_dsp_vector::RealNumber'>RealNumber</a>, N:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.NumberSpace.html' title='basic_dsp_vector::vector_types::NumberSpace'>NumberSpace</a>, D:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.Domain.html' title='basic_dsp_vector::vector_types::Domain'>Domain</a>&gt; <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>&amp;'a <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 3]</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 3]</a>&gt; for <a class='struct' href='basic_dsp_matrix/struct.Matrix3xN.html' title='basic_dsp_matrix::Matrix3xN'>Matrix3xN</a>&lt;<a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;, S, T&gt;","impl&lt;'a, S:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/requirements/trait.ToSliceMut.html' title='basic_dsp_vector::vector_types::requirements::ToSliceMut'>ToSliceMut</a>&lt;T&gt;, T:&nbsp;<a class='trait' href='basic_dsp_vector/trait.RealNumber.html' title='basic_dsp_vector::RealNumber'>RealNumber</a>, N:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.NumberSpace.html' title='basic_dsp_vector::vector_types::NumberSpace'>NumberSpace</a>, D:&nbsp;<a class='trait' href='basic_dsp_vector/vector_types/trait.Domain.html' title='basic_dsp_vector::vector_types::Domain'>Domain</a>&gt; <a class='trait' href='basic_dsp_vector/vector_types/time_freq/convolution/trait.ConvolutionOps.html' title='basic_dsp_vector::vector_types::time_freq::convolution::ConvolutionOps'>ConvolutionOps</a>&lt;S, T, <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>&amp;'a <a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 4]</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 4]</a>&gt; for <a class='struct' href='basic_dsp_matrix/struct.Matrix4xN.html' title='basic_dsp_matrix::Matrix4xN'>Matrix4xN</a>&lt;<a class='struct' href='basic_dsp_vector/vector_types/struct.DspVec.html' title='basic_dsp_vector::vector_types::DspVec'>DspVec</a>&lt;S, T, N, D&gt;, S, T&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
