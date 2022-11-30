<?php

namespace App\Http\Controllers;

use App\Models\Books;
use App\Models\Categories;
use App\Models\Tags;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('User/index', [
            'title' => 'Home',
            'description' => "Mega Press adalah Penerbit buku di Indonesia yang berdiri pada Tahun 2022, yang sudah memiliki ISBN dan terdaftar sebagai Anggota IKAPI. Bertempatkan di Sumedang Bandung Jawa Barat Indonesia",
            'books' => Books::all()
        ]);
    }

    public function indexAdmin()
    {
        // dd(auth()->user());
        return Inertia::render('Admin/Index', [
            'title' => 'Daftar Buku',
            'auth' => auth()->user(),
            'books' => Books::all()
        ]);
    }

    public function katalog()
    {
        return Inertia::render('User/Katalog', [
            'title' => 'Katalog',
            'description' => 'Katalog Buku',
            'books' => Books::all(),
            'categories' => Categories::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/TambahBuku', [
            'title' => 'Tambah Buku',
            'auth' => auth()->user(),
            'categories' => Categories::all(),
            'tags' => Tags::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->gambar);
        // memberi nama supaya file tidak sama
        $imgName = $request->gambar->getClientOriginalName() . '-' . time() . '.' . $request->gambar->extension();
        // dd($imgName);
        
        // memindahkan file ke dirctory public
        $request->gambar->move(public_path('img/book'), $imgName);


        Books::create([
            'judul'      => $request->judul,
            'gambar'     => $imgName,
            'slug'       => Str::slug($request->judul, '-'),
            'harga'      => $request->harga,
            'penulis'    => $request->penulis,
            'cetakan'    => $request->cetakan,
            'isbn'       => $request->isbn,
            'ukuran'     => $request->ukuran,
            'halaman'    => $request->halaman,
            'keterangan' => $request->keterangan,
            'sinopsis'   => $request->sinopsis,
            'kategori'   => $request->kategori,
            'tag'        => $request->tag
        ]);

        return Redirect::route('admin.buku');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function show(Books $books, $slug)
    {
        // dd($slug);
        $books = Books::where('slug', $slug)->first();
        return Inertia::render('Admin/TampilBuku', [
            'data' => [
                'title' => 'Buku',
                'auth' => auth()->user(),
                'books' => $books
            ]
        ]);
    }

    public function showUser(Books $books ,$slug)
    {
        // dd($slug);
        $books = Books::where('slug', $slug)->first();
        return inertia::render('User/TampilKatalog', [
            'data' => [
                'title' => 'Detail Buku',
                'auth' => auth()->user(),
                'categories' => Categories::all(),
                'books' => $books
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function edit(Books $books, $slug)
    {
        $book = Books::where('slug', $slug)->first();
        $categories = Categories::all();
        $tags = Tags::all();

        return Inertia::render('Admin/EditBuku', [
            'datas' => [
                'title' => 'Edit Buku',
                'auth' => auth()->user(),
                'book' => $book,
                'categories' => $categories,
                'tags' => $tags 
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Books $books)
    {
        $oldPict = Books::find($request->id);
        // dd($oldPict->gambar);

        if ($request->gambar != $oldPict->gambar){
            $request->validate([
                'judul'      => 'required',
                'gambar'     => 'required|mimes:png,jpeg,jpg',
                // 'slug'       => 'required',
                'harga'      => 'required',
                'penulis'    => 'required',
                'cetakan'    => 'required',
                'isbn'       => 'required',
                'ukuran'     => 'required',
                'halaman'    => 'required',
                'keterangan' => 'required',
                'sinopsis'   => 'required',
                'kategori'   => 'required',
                'tag'        => 'required',

            ]);
            $imgName = $request->gambar->getClientOriginalName() . '-' . time() . '.' . $request->gambar->extension();

            $request->gambar->move(public_path('img/book'), $imgName);

        }elseif ($request->judul != $oldPict->judul) {
            $request->validate([
                'judul'      => 'required|unique:books,judul',
                // 'gambar'     => 'required|mimes:png,jpeg,jpg',
                // 'slug'       => 'required',
                'harga'      => 'required',
                'penulis'    => 'required',
                'cetakan'    => 'required',
                'isbn'       => 'required',
                'ukuran'     => 'required',
                'halaman'    => 'required',
                'keterangan' => 'required',
                'sinopsis'   => 'required',
                'kategori'   => 'required',
                'tag'        => 'required',
            ]);
            if ($request->gambar != $oldPict->gambar){
                $imgName = $request->gambar->getClientOriginalName() . '-' . time() . '.' . $request->gambar->extension();

            // memindahkan file ke dirctory public
            $request->gambar->move(public_path('img/book/'), $imgName);
            }else {
                $imgName = $oldPict->gambar;
            }
        } else {
            $request->validate([
                'judul'      => 'required',
                // 'gambar'     => 'required|mimes:png,jpeg,jpg',
                // 'slug'       => 'required',
                'harga'      => 'required',
                'penulis'    => 'required',
                'cetakan'    => 'required',
                'isbn'       => 'required',
                'ukuran'     => 'required',
                'halaman'    => 'required',
                'keterangan' => 'required',
                'sinopsis'   => 'required',
                'kategori'   => 'required',
                'tag'        => 'required',
            ]);
            $imgName = $oldPict->gambar;
        }

        Books::where('id', $request->id)->update([
            'judul'      => $request->judul,
            'gambar'     => $imgName,
            'slug'       => Str::slug($request->judul, '-'),
            'harga'      => $request->harga,
            'penulis'    => $request->penulis,
            'cetakan'    => $request->cetakan,
            'isbn'       => $request->isbn,
            'ukuran'     => $request->ukuran,
            'halaman'    => $request->halaman,
            'keterangan' => $request->keterangan,
            'sinopsis'   => $request->sinopsis,
            'kategori'   => $request->kategori,
            'tag'        => $request->tag
        ]);

        return Redirect::route('admin.buku');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function destroy(Books $books, $id)
    {
        $del = Books::find($id);
        $hps = $del->gambar;
        $gmbrHps = public_path('img/book/' . $hps);
        // dd($gmbrHps);
        $tdkHpsDefault = public_path('img/book/default.png');
        if (file_exists($gmbrHps)) {
            if ($gmbrHps != $tdkHpsDefault) {
                unlink($gmbrHps);
            }
        }
        $del->delete();
        return Redirect::route('admin.buku')->with('message', 'Kategori Dihapus.');
    }
}
