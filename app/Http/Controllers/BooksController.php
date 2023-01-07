<?php

namespace App\Http\Controllers;

use App\Http\Resources\BooksCollection;
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
            'books' => Books::orderBy('cetakan', 'desc')->take(5)->get()
        ]);
    }

    public function indexAdmin()
    {
        // dd(auth());
        $books = new BooksCollection(Books::paginate(10));

        return Inertia::render('Admin/Index', [
            'title' => 'Daftar Buku',
            'auth' => auth()->user(),
            'books' => $books
        ]);
    }

    public function katalog()
    {
        // $books = Books::all();
        $books = new BooksCollection(Books::paginate(10));
        // dd($books);

        return Inertia::render('User/Katalog', [
            'title' => 'Katalog',
            'description' => 'Katalog Buku',
            'books' => $books,
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
        // $gmbrHps = store('gambar');
        // dd($gmbrHps);
        // ddd($request->file('gambar')->store('book'));
        // return $request->file('gambar')->store('book');
        $request->validate([
            'judul'      => 'required|unique:books,judul|max:255',
            'gambar'     => 'required|image|file|max:1024|mimes:png,jpeg,jpg',
            // 'slug'       => 'required',
            'harga'      => 'required',
            'penulis'    => 'required',
            'cetakan'    => 'required',
            'isbn'       => 'required',
            'ukuran'     => 'required',
            'halaman'    => 'required',
            'keterangan' => 'required',
            'sinopsis'   => 'required',
            'categories_id'   => 'required',
            'tag'        => 'required',

        ]);

        // memberi nama supaya file tidak sama
        // $imgName = $request->gambar->getClientOriginalName() . '-' . time() . '.' . $request->gambar->extension();
        // dd($imgName);
        
        // memindahkan file ke dirctory public
        // $request->gambar->move(public_path('img/book'), $imgName);
        $request->gambar->store('book');


        Books::create([
            'judul'           => $request->judul,
            'gambar'          => $request->file('gambar')->store('book'),
            'slug'            => Str::slug($request->judul, '-'),
            'harga'           => $request->harga,
            'penulis'         => $request->penulis,
            'cetakan'         => $request->cetakan,
            'isbn'            => $request->isbn,
            'ukuran'          => $request->ukuran,
            'halaman'         => $request->halaman,
            'keterangan'      => $request->keterangan,
            'sinopsis'        => $request->sinopsis,
            'categories_id'   => $request->categories_id,
            'tag'             => $request->tag
        ]);

        return Redirect::route('admin.buku')->with('add', 'Data buku ditambahkan.');
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
        // dd($books->categories->deskripsi);
        $category = $books->categories->deskripsi;
        return Inertia::render('Admin/TampilBuku', [
            'data' => [
                'title' => 'Buku',
                'auth' => auth()->user(),
                'books' => $books,
            ]
        ]);
    }

    public function showUser(Books $books ,$slug)
    {
        $books = Books::where('slug', $slug)->first();
        return inertia::render('User/TampilKatalog', [
            'data' => [
                'title' => 'Detail Buku',
                'categories' => Categories::all(),
                'books' => $books,
                'kategori' => $books->categories->deskripsi
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
        $gmbrHps = public_path('storage/'. $oldPict->gambar);

        // dd(public_path('storage/'. $oldPict->gambar));

        if ($request->gambar != $oldPict->gambar){
            $request->validate([
                'judul'      => 'required',
                'gambar'     => 'required|image|file|max:1024|mimes:png,jpeg,jpg',
                // 'slug'       => 'required',
                'harga'      => 'required',
                'penulis'    => 'required',
                'cetakan'    => 'required',
                'isbn'       => 'required',
                'ukuran'     => 'required',
                'halaman'    => 'required',
                'keterangan' => 'required',
                'sinopsis'   => 'required',
                'categories_id'   => 'required',
                'tag'        => 'required',

            ]);
            unlink($gmbrHps);
            $imgName = $request->file('gambar')->store('book');
            $request->gambar->store('book');

            // $request->gambar->move(public_path('img/book'), $imgName);

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
                'categories_id'   => 'required',
                'tag'        => 'required',
            ]);
            if ($request->gambar != $oldPict->gambar){
                // $imgName = $request->gambar->getClientOriginalName() . '-' . time() . '.' . $request->gambar->extension();
                unlink($gmbrHps);
                $imgName = $request->file('gambar')->store('book');
                $request->gambar->store('book');
            // memindahkan file ke dirctory public
            // $request->gambar->move(public_path('img/book/'), $imgName);
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
                'categories_id'   => 'required',
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
            'categories_id'   => $request->categories_id,
            'tag'        => $request->tag
        ]);

        return Redirect::route('admin.buku')->with('edit', 'Data buku disunting.');
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
        return Redirect::route('admin.buku')->with('delete', 'Data buku dihapus.');
    }

    public function cari(Request $request)
    {
        $cari = $request->cari;
        $books = new BooksCollection(Books::where('judul','like',"%".$cari."%")->paginate(10));

        return Inertia::render('User/Cari', [
            'title' => 'Katalog',
            'description' => 'Katalog Buku',
            'books' => $books,
            'categories' => Categories::all()
        ]);
    }
}
